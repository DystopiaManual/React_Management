import Customer from './components/Customer';
import './App.css';

const customers = [
  {
  id: 1,
  image: 'https://placeimg.com/64/64/1',
  name: '홍길동',
  birthday: '961222',
  gender: '남자',
  job: '대학생'
},
  {
  id: 2,
  image: 'https://placeimg.com/64/64/2',
  name: '김태리',
  birthday: '951127',
  gender: '여자',
  job: '대학생'
},
  {
  id: 3,
  image: 'https://placeimg.com/64/64/3',
  name: '김우일',
  birthday: '861222',
  gender: '남자',
  job: '통역사'
},
]

function App() {
  return (
    <div>
      {
        customers.map(c => {
          return (
            <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />
          );
        })
      }
    </div>
  );
}

export default App;
