import CollapsibleNavbar from "../navbar/NavBar";
import { getUser } from "../services/UserInfo";

export default function Dashboard() {
	const user = getUser();
	return (
		<div>
			<CollapsibleNavbar user={user} />
			<h1>Into Dashboard</h1>
		</div>
	);
}
