CREATE USER C##test_user
    IDENTIFIED BY qwerty;
GRANT UNLIMITED TABLESPACE TO C##test_user;
GRANT CREATE SESSION TO C##test_user;