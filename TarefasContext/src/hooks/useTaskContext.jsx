import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export default function useTaskContext() {

    const context = useContext(TaskContext);

    return context;
}