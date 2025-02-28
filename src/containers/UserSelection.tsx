import React from 'react';
import { connect } from 'react-redux';
import { RootState } from 'typesafe-actions';
import { User } from 'Models';
import SelectInput from '../components/SelectInput';
import Option from '../components/Option';
import { selectUsers } from '../store/users/selectors';


interface Props {
  name: string;
  value?: string | string[] | number;
  users: User[];
}
function UserSelection({ value, name, users }: Props) {
  return (
    <SelectInput
      label="by"
      name={name}
      value={value}
    >
      {users.map(u => (
        <Option
          key={u.id}
          value={u.id}
        >
          {u.name}
        </Option>
      ))}
    </SelectInput>
  );
}

const mapStateToProps = (state: RootState) => ({
  users: selectUsers(state),
});

export default connect(
  mapStateToProps,
)(UserSelection);
