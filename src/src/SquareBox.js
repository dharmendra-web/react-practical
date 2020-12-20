import { useState} from 'react';
function SquareBox() {
    const [squareData, setSquare] = useState(['red', 'Black','red', 'Black','red', 'Black','red', 'Black','red', 'Black','red', 'Black']);
    function updateData(event) {
        let index_no = parseInt(event.target.id);
        let data  = squareData;
        if (index_no != 0) {
            data[index_no-1] = (data[index_no-1] == 'red') ? 'Black': 'red';
        }
        if (index_no != (data.length-1)) {
            data[index_no + 1] = (data[index_no + 1] == 'red') ? 'Black': 'red';
        }
        setSquare([...squareData]);
    }
    return(
        
        <>
            {
               squareData.map((data, index)=> {
                   return(
                    <div id={index} key={index} onClick={updateData} className="inline-block" style={{display: 'inline-block', backgroundColor: data, height: '100px', width: '100px'}}></div>)
                })
            }
        </>
    );
}
export default SquareBox;