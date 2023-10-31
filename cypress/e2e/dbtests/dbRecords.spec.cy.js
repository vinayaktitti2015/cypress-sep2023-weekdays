describe("create records", () => {
  // create a new record
  it("Insert the records to the DB Customers table", () => {
    cy.insertRecords("INSERT INTO Customers(personID, LastName, FirstName, Address, City) values(001, 'Doe', 'John', '101 sdsdewrerer', 'Bangalore' )");
  });

  // read a list of records
  it("Fetch records and validate", () => {
    cy.fetchRecords();
  });

  // update the record
  it("Update the record", () => {
    cy.updaterecords();
  });

  // delete a record
  it("Delete records and validate", () => {
    cy.deleteRecord("DELETE FROM Customers where PersonID=1");
  });
});
