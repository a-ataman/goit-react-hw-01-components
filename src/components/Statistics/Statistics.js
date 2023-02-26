// import PropTypes from 'prop-types';

export  const Statistics =({ title, stats }) =>{
   
      return (
      <section>
         {title && <h2>{title}</h2>}
        <ul> {stats.map(item => { return (
          <li key={item.id} >
            <span>{item.label}</span>
            <span>{item.percentage}%</span>
          </li>
        );
          })}
        </ul>
      </section>);
    
  }
  
  // function getColor() {
  //   return `${createColorFragment()}, ${createColorFragment()}, ${createColorFragment()}`
  // }
  // style={{ backgroundColor: `rgb(${getColor()})` }}
  // function createColorFragment() {
  //   return Math.floor(Math.random() * 255)
  // }

//  Statistics.propTypes={
//   title: PropTypes.string.isRequired,
//   stats:PropTypes.array({
//   id: PropTypes.string.isRequired,
//   label:PropTypes.string.isRequired,
//   percentage:PropTypes.number.isRequired,
// }).isRequired
//  }