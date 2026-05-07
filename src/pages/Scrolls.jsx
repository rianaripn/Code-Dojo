import data from '../data/resources.json'


function Scrolls({bookmarks}){
    const scroll = data.filter(s=>s.id === bookmarks) 
    console.log(scroll)
    return (
        <h2>Scrolls Page {scroll}</h2>
    )
}
export default Scrolls