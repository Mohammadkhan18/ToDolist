import React from "react";

const List = (props) => {



    return (
    <>
    <div className="todo_style">
    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAACIUlEQVR4nO2aPUgcQRSAv80JR+BEyClpImjjFaZRMKQycCBWepWVkuqwTWUstYzpLM11liFFyiSQECuDoDamSJOANiFEUIQgJjllYBYO2dudu927nbl9H7xu5/0MM29m3lsQBEEQBEEQBEEQhHZZBPrpHv3aphWsA9fAN+BhF+yNAUfa5gssCf5aywWw0EF788DZLZupTcLSLUd8qQMbQC5BWzmts97EpvKl6xSAr00cUrID3E/AziDwIcSO2noDpEQpYEk2ygnwOIb+SeBHiH615cZJmUrI0lRyCTxrQ+9T4E+I3nqH801LbIQ46ss2cNdAVx7YMtCX+gnQyB3gnYHTB8AozXkAfDHQ8xHowzLuAd8NnP8NzASMfwL8NBh/DAxhKRMR+9aXf/oOoVaOp3PElcE4lU+msJyqQSC+vNFi+r3S7QS1FoIylVc4RB7YSzD4A8MTxCqGgV8JBH8acXJYTRn4GyN4lSxncZznMSZghR7AA163EfxbPdZ5vKxPwGqMLaC2j9OUYybB/y4nweEsH4P5hC9Ch65dhGoJBt9YT3CCapYfQxMtPoe9Np7Dj7CUYkQBM6ogMu1yQSQHvDdwfh8YiSiJ7Rro+WRbSexlwkXRTQN9qhBrBRWDsvhyr5bFS8B5VhsjhYjW2OeEWmNFW1tjS1lvjga99DrdHp8L6EWukTKrDUtxvMs/SKQevE+mf5ERBEEQBEEQBEEQcIwb3oc02gEvlMMAAAAASUVORK5CYII=" className="fa fa-times" 
      alt="img"  onClick={() =>{
        props.onSelect(props.id);
      }}
    />
    <li>{props.text}</li>
    </div>
    </>
    );

};
export default List;