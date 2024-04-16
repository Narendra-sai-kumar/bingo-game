import { useEffect, useState } from 'react';
import './Bingo.css';

const Bingobody = ({ rows }) => {
    const [numberArr, setNumberArr] = useState([]);
    const [markedArr, setMarkedArr] = useState([]);
    const [rowsCount, setRowsCount] = useState(0);

    const winningArr = [[1,2,3,4,5], [6,7,8,9,10], [11,12,13,14,15], [16,17,18,19,20], 
                        [21,22,23,24,25],[1,6,11,16,21], [2,7,12,17,22], [3,8,13,18,23], 
                        [4,9,14,19,24], [5,10,15,20,25], [1,7,13,19,25], [5,9, 13,17,21]
                    ]
    useEffect(() => {
        const total_cells = rows * rows;
        const generatedNumbers = [];

        while (generatedNumbers.length < total_cells) {
            const randomNumber = Math.floor(Math.random() * total_cells) + 1;
            if (!generatedNumbers.includes(randomNumber)) {
                generatedNumbers.push(randomNumber);
            }
        }

        console.log("Generated numbers:", JSON.stringify(generatedNumbers));
        setNumberArr(generatedNumbers);
    }, [rows]); // Only run this effect when 'rows' prop changes


    const handelClick =(num) =>{
        if(!markedArr.includes(num)){
            setMarkedArr(prevMarkedArr => [...prevMarkedArr, num]);  
        }else{
            const updatedMarkedArr = markedArr.filter((e)=> e != num);
            console.log("updatedMarkedArr", updatedMarkedArr);
            setMarkedArr(updatedMarkedArr);
        }
    }
    

    useEffect(() =>{
        setRowsCount(0); 
        console.log("marked_arr", markedArr);
        for(let i=0;i< winningArr.length;i++){
            let count =0;

            for(let j =0;j<winningArr[i].length;j++){
                let indidualNumber = winningArr[i][j];
                
                if(markedArr.includes(indidualNumber)){
                    count++;
                }else{
                    break;
                }
            }
            if(count == 5){
                setRowsCount((prevCount) => prevCount+1);
            }
        }
        
        
    }, [markedArr]);

    useEffect(() => {
        if (rowsCount > 4) {
            alert("Game Completed");
        }
    }, [rowsCount]);

    return (
        
        <div className="bingo-body"> 
            <h1>Rows Completed : {rowsCount}</h1>
            <div className="bingo-container" style={{ "--rows": rows }}>
                
                {numberArr.map((number, index) => (
                    <div className={`box ${ markedArr.includes(index+1) ? "active": "" }`} key={index+1} onClick={() => handelClick(index+1)}>{number}</div>
                ))}
            </div>
            
            { (rowsCount>4) ? <h1>You Won🎉🎉🎉</h1>:""}

        </div>
       
    );
};

export default Bingobody;
