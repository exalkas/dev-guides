/**
 * Task: Get a value that is being passed from a component to another using the address bar
 * 
 * 1. Setup the routes file to specify the exact path that will contain the desired value
 */

import React from 'React'

/**
 * In routes file
 */
import {Switch, Route} from 'react-rooter-dom'

 export default function Routes () {
    return(
        <Switch>
          <Route path="/somePath/:someVariableName" exact><SomeLayout><Route component = {SomeComponent} /></SomeLayout></Route>
  
        </Switch>
    )
  }

import {useParams} from 'react-rooter-dom'

/**
 * 2. Setup the component that will push the desired address with the desired value
 */

import {Link} from 'react-rooter-dom'

export default function RenderUsersWithLinkToPathWithId  (props) {

// props contain the users array, which contain the user ids

    return (
        <div>
            {
                props.users.map((user, index) => <Link to={`/pathThatIsDefinedIntheRoutes/${user.userid}`}>{user.username}</Link>)
            }
        </div>
    )

}

/**
 * 3. Setup the component that will read the variable from the address bar and store it 
 * in the defined variable
 */


export default function SomeComponent() {

    const {sameVariableNameAsInRoutes} = useParams()

    return (
        <div>Here you can use the {sameVariableNameAsInRoutes}</div>
        
    )
}
