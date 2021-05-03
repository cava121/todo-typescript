import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/reducers';
import { fetchTodo } from './../store/actions/todo';

const TodoList: React.FC = () => {
  const { todos, error, currentPage, loading } = useSelector(
    (state: RootState) => state.todo
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodo(currentPage));
  }, []);

  const handlerCurrentPage = (page: number) => {
    dispatch(fetchTodo(page));
  };

  return (
    <div>
      {error ? 'Возникла ошибка' : loading && <h1>Идет загрука...</h1>}
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            {todo.id} - {todo.title}
          </div>
        );
      })}
      <div style={{ display: 'flex', marginTop: '5px' }}>
        {Array(5)
          .fill('')
          .map((item, index) => {
            let color = 'green';
            if (index + 1 === currentPage) color = 'yellow';
            return (
              <div
                onClick={() => handlerCurrentPage(index + 1)}
                key={index}
                style={{
                  background: color,
                  padding: '10px',
                  marginRight: '5px',
                  cursor: 'pointer',
                }}
              >
                {index + 1}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default TodoList;
