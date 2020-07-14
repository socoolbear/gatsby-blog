import _ from 'underscore';

let numbers = [];
_.times(45, n => numbers.push(n + 1));
numbers = _.shuffle(numbers);
numbers.length = 6;

const LottoGenerator = () => {
    return <div>
        {numbers.join(',')}
    </div>;
};

export default LottoGenerator;