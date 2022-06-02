import React, { memo } from 'react';

const HabitAddForm = memo((props) => {
  const formRef = React.createRef();
  const inputRef = React.createRef();

  const onSubmit = (event) => {
    event.preventDefault();
    // console.log(this.inputRef.current.value);
    const name = this.inputRef.current.value;
    name && this.props.onAdd(name);
    // this.inputRef.current.value = '';
    this.formRef.current.reset();
  };
  return (
    <form ref={this.formRef} className="add-form" onSubmit={this.onSubmit}>
      <input
        ref={this.inputRef}
        type="text"
        className="add-input"
        placeholder="habit"
      />
      <button className="add-button">Add</button>
    </form>
  );
});
export default HabitAddForm;

// class HabitAddForm extends PureComponent {
//   formRef = React.createRef();
//   inputRef = React.createRef();

//   onSubmit = (event) => {
//     event.preventDefault();
//     // console.log(this.inputRef.current.value);
//     const name = this.inputRef.current.value;
//     name && this.props.onAdd(name);
//     // this.inputRef.current.value = '';
//     this.formRef.current.reset();
//   };
//   render() {
//     console.log('habitAddform');
//     // const input = document.querySelector('s');
//     // input.value;
//     return (
//       <form ref={this.formRef} className="add-form" onSubmit={this.onSubmit}>
//         <input
//           ref={this.inputRef}
//           type="text"
//           className="add-input"
//           placeholder="habit"
//         />
//         <button className="add-button">Add</button>
//       </form>
//     );
//   }
// }

// export default HabitAddForm;
