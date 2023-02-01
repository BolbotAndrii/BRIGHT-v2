import React from 'react'
import MainAdminLayout from "../../layouts/admin/main.admin.layout";
import {OrderWidget} from "../../components/admin/widgets/order.widget/order.widget";

const Index = (props: any) => {
    return (
        <>
            <MainAdminLayout>
                <OrderWidget />
            </MainAdminLayout>
        </>
    )
}

export default Index