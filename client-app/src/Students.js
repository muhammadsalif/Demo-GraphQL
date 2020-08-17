import { useQuery, gql } from "@apollo/client";
import React from "react";

const STUDENTS_CALL = gql`
  query GetStudentsData {
    students {
      name
      id
    }
  }
`;

function Students() {
  const { loading, error, data } = useQuery(STUDENTS_CALL);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  //   console.log(data);
  return (
    <>
      <h2>The list of Students data</h2>
      {data.students.map((std, ind) => {
        return (
          <div key={ind}>
            <br></br>
            {std.name}
          </div>
        );
      })}
    </>
  );
  //   return data.rates.map(({ currency, rate }) => (
  //     <div key={currency}>
  //       <p>
  //         {currency}: {rate}
  //       </p>
  //     </div>
  //   ));
}

export default Students;
