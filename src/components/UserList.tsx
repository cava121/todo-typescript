import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/reducers';
import { fetchUsers } from './../store/actions/user';

const UserList: React.FC = () => {
  const { users, error, loading } = useSelector(
    (state: RootState) => state.user
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div>
      {error ? 'Произошла ошибка' : loading && <h2>Идет загрузка...</h2>}
      {users.map((user) => {
        return <div key={user.id}>{user.name}</div>;
      })}
    </div>
  );
};

export default UserList;
