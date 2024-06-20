import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { verifyEmail } from '../../http/authAPI';
import './Verification.scss';

const Verification = () => {
  const [message, setMessage] = useState('');

  const { token } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    const checkEmail = async () => {
      const response = await verifyEmail(token.replace(/~/g, '.'));

      if (response.status === 200) {
        // navigate('/booking/password');
        setMessage(response.data.message);
      } else {
        setMessage(response.data.message);
      }
    };

    checkEmail();
  }, [token]);

  return (
    <div>
      {message}
    </div>
  );
};

export default Verification;
