import { CompleteTaskView } from "../views/CompleteTaskView";
import useTaskStore from "../store/taskStore";

export function CompleteTaskComponent({ task }) {
    const { completeTask } = useTaskStore();

    const handleChange = () => {
        completeTask(task.id);
    };

    return (
        <CompleteTaskView
            taskId={task.id}
            isCompleted={task.completed}
            onChange={handleChange}
        />
    );
}
