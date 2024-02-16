type GreetProps = {
    name? : string,
}
export const Greet = (props : GreetProps) => {
  return (
    <div>Hello {props.name ? props.name : "Guest"}</div>
  )
}

//  on making it ternory operator 
// * Jest gave Error 
//  ! Jest: "global" coverage threshold for branches (80%) not met: 50% ( with line number : 6 in (uncovered line block))