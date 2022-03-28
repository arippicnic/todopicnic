import type { NextPage } from "next";

import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

import styles from "../styles/Main.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className="row">
        <div className="col-md-12">
          <TodoForm />
          <TodoList />
        </div>
      </div>
    </div>
  );
};

export default Home;
