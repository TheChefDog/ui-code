import Base from "../components/Base";
import Sidebar from "../components/Dashboard/SideBar";
import Title from "../components/Dashboard/Title";
import GroupSection from "../components/Task/GroupSection";
import Time from "../components/Dashboard/Time";
import TableButtons from "../components/Task/TableButtons"
import Table from "../components/Task/Table";

function Tasks() {
  return (
    <Base>
      <Sidebar SelectedTab={2} />
      <GroupSection />

      <div className="-mt-5 -ml-6">
        <Title name="Tasks">
          <Time />

        </Title>
        <div className="ml-2 -mt-12">
          <TableButtons />
          <Table />
        </div>
      </div>

    </Base>
  );
}

export default Tasks;
