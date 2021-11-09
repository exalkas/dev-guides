/**
 * Task: Render an array of items
 */

import React from 'react'

export default function RenderUsers(props) {
  // props contain the users array, which contain the user ids
  // if the name of attribute inside the props is known then 
  // destructuring would be a better option:
  // export default function RenderUsers({users}) {

  return (
    <div>
      {props.users.map((user, index) => 
        <div key={index}>
            {user.username} is {user.age}
        </div>
      )}
    </div>
  );
}
