import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { verifyEmail } from '../../http/authAPI';
import './Verification.scss';

const Verification = () => {
  const [message, setMessage] = useState('');

  const { token } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    const verifyEmail = async () => {
      const response = await verifyEmail(token);

      if (response.status === 200) {
        navigate();
      } else {
        setMessage(response.data.message);
      }
    };

    verifyEmail();
  }, [token]);

  return <div></div>;
};

export default Verification;
