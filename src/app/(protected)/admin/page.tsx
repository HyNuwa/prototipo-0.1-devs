import LogoutButton from "@/components/shared/logout-button";
import { auth } from "@/lib/auth"

const AdminPage = async () => {
    const session = await auth();

    if(session?.user?.role !== "SUPERADMIN"){
        return <div>You are not admin</div>
    }

    return (
        <div className="container">
            <pre>{JSON.stringify(session, null, 2)}</pre>
            <LogoutButton />
        </div>
    );
};

export default AdminPage;