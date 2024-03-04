import styled from "styled-components";

const ProfileContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 24.375rem;
  height: 8rem;
`;

const PersonalInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 3rem;
  gap: 1rem;

  width: 12rem;
  height: 4.5rem;

  span {
    color: #fff;
    font-family: Pretendard;
    font-size: 1.57838rem;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    letter-spacing: -0.09469rem;
  }
`;

const KakaoCertification = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.3rem;

  width: 8.5rem;
  height: 1.5rem;
  flex-shrink: 0;

  border-radius: 0.59744rem;
  background: rgba(255, 255, 255, 0.38);

  text-align: center;
  color: #fff;
  font-family: Pretendard;
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.05625rem;

  img {
    width: 1.00213rem;
    height: 0.9375rem;
    flex-shrink: 0;
  }
`;

const ImageBox = styled.div`
  display: flex;
  padding-right: 2.5rem;

  .profile-image {
    position: relative;
    width: 6.4375rem;
    height: 6.4375rem;

    border-radius: 8rem;
    background: #cdcdcd;

    cursor: pointer;
  }

  .pencil {
    width: 1.625rem;
    height: 1.625rem;

    position: absolute;
    bottom: 0;
    right: 0;

    cursor: pointer;
  }
`;

const UserProfile = ({ name, value }) => {
  return (
    <ProfileContainer>
      <PersonalInfo>
        <span className="info">
          {name} {value}
        </span>
        <KakaoCertification>
          <img src="../images/kakao.png" />
          카카오인증완료
        </KakaoCertification>
      </PersonalInfo>

      <ImageBox>
        <div className="profile-image">
          <svg
            className="pencil"
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
          >
            <circle cx="13" cy="13" r="13" fill="white" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M18.8854 7.56986C18.4899 7.20498 17.9537 7 17.3946 7C16.8354 7 16.2992 7.20498 15.9038 7.56986L15.4069 8.0292L18.8861 11.2407L19.3823 10.782C19.5781 10.6012 19.7335 10.3867 19.8395 10.1505C19.9454 9.91434 20 9.66122 20 9.40559C20 9.14997 19.9454 8.89685 19.8395 8.66068C19.7335 8.42452 19.5781 8.20994 19.3823 8.0292L18.8854 7.56986ZM17.8915 12.1581L14.4123 8.94658L8.02326 14.8447C7.88344 14.9737 7.78578 15.1365 7.74141 15.3144L7.01816 18.2047C6.99121 18.312 6.9943 18.4239 7.02714 18.5298C7.05998 18.6357 7.12149 18.7321 7.20586 18.81C7.29024 18.8879 7.39471 18.9446 7.50944 18.9749C7.62416 19.0053 7.74535 19.0081 7.8616 18.9832L10.9936 18.3163C11.186 18.2752 11.3621 18.1851 11.5017 18.0561L17.8915 12.1581Z"
              fill="black"
            />
          </svg>
        </div>
      </ImageBox>
    </ProfileContainer>
  );
};

export default UserProfile;
