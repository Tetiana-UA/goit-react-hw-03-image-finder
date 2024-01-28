import { Component } from "react";

import css from "./modal.module.css";
import { Children } from "react";

export class Modal extends Component {
    
componentDidMount(){
    document.addEventListener("keydown",this.closeModal)

}

closeModal=({target, currentTarget, code}) => {
    if(target === currentTarget || code === "Escape"){
        this.props.close()
    }
}

    render() {
        const {closeModal} =this;
        const {children, close}=this.props;
        return (
            <div class="overlay">
  <div className={css.modal}>
    {children}
    
  </div>
</div>
        );
    }
}
 
