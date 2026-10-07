import UserItem from "./UserItem";
import { usersData } from "../../store/static/users";
import UserAddress from "./UserAddress";

export default function Users(){

    console.log("userData", usersData)

    const UserList = usersData.map(user => {

        const myObj = {...user, label: "hallo"}
        return <UserItem key={user.id} {...myObj}>
            <UserAddress/>
            </UserItem>
    })

    console.log("userlist", UserList)
    
    return <section id="users-feature">
        <div>
            {UserList}
        </div>
    </section>
}