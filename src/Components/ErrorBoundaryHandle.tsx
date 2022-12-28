import { useState } from "react";
import { Button } from "react-bootstrap";
import { UserComponent } from "./UserComponent";

export function ErrorBoundaryHandle() {
    const [isUserComponent, setIsUserComponent] = useState(false);

    return (
        <div>
            {isUserComponent ? <UserComponent /> : null}
            <Button onClick={() => setIsUserComponent(true)}>User Component</Button>
        </div>
    )
}