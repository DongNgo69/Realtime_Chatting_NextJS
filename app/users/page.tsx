'use client'

import EmptyState from "../components/EmptyState"

const Users = () => {
    return (
        //div của đoạn mess thụt vào pl-80
        <div className=" hidden lg:block lg:pl-80 h-full">
            <EmptyState />
        </div>
    )
}

export default Users