
function getSolutionColor (difficulty){
    switch (difficulty.toLowerCase()) {
      case 'easy':
        return '#8AFF80'; // light green
      case 'medium':
        return '#FFD700'; // orange
      case 'hard':
        return '#FF6B6B'; // red
      default:
        return ''; // default color or handle other cases
    }
  };

const TableRow = ({ topic, solution, difficulty,index}) => {
    const rowStyle = {
        background: index % 2 === 0 ? '#ffffff' : '#eeeeee',
        height: '44px'};
        const difficultyColor = getSolutionColor(difficulty);

      
    return (
        <tr className="px-2" style={rowStyle}>
            <td className="w-52 py-2" style={{width:'52px'}}>
                <svg xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                width="1em" 
                height="1em" 
                fill="fill-green-600" 
                className="h-18 w-18 cursor-pointer text-green-500 fill-green-600 ">
                    <path fill-rule="evenodd" 
                          d="M19 11.063V7h-2v1a1 1 0 11-2 0V7H9v1a1 1 0 01-2 0V7H5v4.063h14zm0 2H5V19h14v-5.938zM9 5h6V4a1 1 0 112 0v1h2a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2V4a1 1 0 012 0v1z" 
                          clip-rule="evenodd">
                    </path>
                    </svg>
            </td>
            <td className="w-260 p-2">{topic}</td>
            <td className="w-54 py-2">{solution}</td>
            <td className="w-54 py-2" style={{color: difficultyColor}}>{difficulty}</td>
            <td className="w-84 py-2">92%</td>
            <td className="w-84 py-2">locked</td>
        </tr>
    );
};

export default TableRow;
