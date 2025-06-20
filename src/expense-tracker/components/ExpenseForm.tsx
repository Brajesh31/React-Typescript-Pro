const ExpenseForm = () => {
  return (
    <div>
      <form className="form-control">
        <label>Description</label>
        <input type="text" />

        <label>Amount</label>
        <input type="text" />

        <label>Category</label>
        <select name="category">
          <option value=""></option>
          <option value="food">food</option>
          <option value="fruit">fruit</option>
          <option value="candy">candy</option>
        </select>
      </form>
    </div>
  );
};

export default ExpenseForm;
