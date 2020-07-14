import _ from 'underscore';
import React from "react";

function generate() {
    let numbers = [];
    _.times(45, n => numbers.push(n + 1));
    numbers = _.shuffle(numbers);
    numbers.length = 6;
    return numbers;
}


const LottoGenerator = () => {
    const [list, setList] = React.useState([]);
    const regenerate = () => {
        setList(generate());
    }
    React.useEffect(() => {
        regenerate();
    }, []);

    return (
        <div>
            <div className={"hero"}>
                {list.map((element, index) =>
                        <span key={index}>{element + ' '}</span>
                    )}
            </div>
            <div>
                <button onClick={regenerate}>재생성</button>
            </div>
        </div>
    );
};

export default LottoGenerator;