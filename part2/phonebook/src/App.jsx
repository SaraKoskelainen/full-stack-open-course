import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-1231244' },
    { name: 'Timo Varis', number: '040-9232544' },
    { name: 'Suvi Naakka', number: '044 285 9244 569' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setPersons(persons.concat({name: newName, number: newNumber}))
    setNewName('')
    setNewNumber('')
  }

  // filter
  const [personsToShow, setPersonsToShow] = useState(persons)

  const handleFilter = (e) => {
    const filterValue = e.target.value

    const matchFilter = (person) => 
      person.name.toUpperCase().includes(filterValue.toUpperCase())
    
    setPersonsToShow(persons.filter(matchFilter)) 
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div> 
        filter shown with <input onChange={handleFilter}/> 
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={e => setNewName(e.target.value)}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={e => setNewNumber(e.target.value)}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {personsToShow.map(p => <p key={p.name}> {p.name} {p.number}</p>)}
    </div>
  )
}

export default App