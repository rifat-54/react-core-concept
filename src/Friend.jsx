
export default function Friend({friends}){
// console.log(friends)
const {name,email}=friends;
    return(
        <div className="box">
            <h4>name: {name}</h4>
            <p>email :{email}</p>
        </div>
    )
}