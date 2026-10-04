import ListGroup from "./components/ListGroup";

function App() {
  let items = [
    "New York",
    "Iowa",
    "Minnesota",
    "Florida",
    "North Carolina",
    "California",
    "Wisconsin",
    "Illinois",
    "Ohio",
    "Indianapolis",
    "Massachusetts",
    "Maryland",
    "Washington",
    "Tennessee",
    "Alabama",
    "Texas",
    "Oklahoma City",
    "North Dakota",
    "South Dakota",
    "Colorado",
    "Nevada",
    "Kentucky",
  ];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
