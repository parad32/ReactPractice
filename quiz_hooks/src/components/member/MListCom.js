import { Link } from 'react-router-dom';

function MListCom({list, onDelete}) {
    return (
        <table style={tableStyle}>
        <div>
            {list && list.map((item,index) => (
                <div key={index}>
                    id:{item.id}<br/>
                    <hr/>
                    <Link to = {`/member/one/${item.id}`}>{item.name}</Link>
                </div>
            ))}
        </div>
        </table>
    )
}       
export default MListCom;

const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '20px'
};
 