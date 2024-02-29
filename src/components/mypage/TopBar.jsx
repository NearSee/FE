import styled from "styled-components";
import { Link } from "react-router-dom";

const Layout = styled.div`
  position: relative;
  width: 100%;
  height: 4rem;

  display: flex;
  align-items: center;

  justify-content: space-between;

  background-color: #ff8d5d;

  img {
    margin: 0 1.3rem;

    width: 3.375rem;
    height: 1.58231rem;
  }

  svg {
    margin: 0 1.3rem;

    width: 1.1875rem;
    height: 1.1875rem;
  }
`;

const TopBar = () => {
  return (
    <Layout>
      <img src={`${process.env.PUBLIC_URL}/images/small_logo4.png`} />

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="19"
        height="19"
        viewBox="0 0 19 19"
        fill="none"
      >
        <path
          d="M9.5 9.5C8.19375 9.5 7.07552 9.0349 6.14531 8.10469C5.2151 7.17448 4.75 6.05625 4.75 4.75C4.75 3.44375 5.2151 2.32552 6.14531 1.39531C7.07552 0.465104 8.19375 0 9.5 0C10.8062 0 11.9245 0.465104 12.8547 1.39531C13.7849 2.32552 14.25 3.44375 14.25 4.75C14.25 6.05625 13.7849 7.17448 12.8547 8.10469C11.9245 9.0349 10.8062 9.5 9.5 9.5ZM0 19V15.675C0 15.0021 0.173375 14.3838 0.520125 13.8201C0.866875 13.2565 1.32683 12.8258 1.9 12.5281C3.12708 11.9146 4.37396 11.4546 5.64062 11.1482C6.90729 10.8419 8.19375 10.6883 9.5 10.6875C10.8062 10.6875 12.0927 10.8411 13.3594 11.1482C14.626 11.4554 15.8729 11.9154 17.1 12.5281C17.674 12.825 18.1343 13.2557 18.4811 13.8201C18.8278 14.3846 19.0008 15.0029 19 15.675V19H0Z"
          fill="white"
        />
      </svg>
    </Layout>
  );
};

export default TopBar;
