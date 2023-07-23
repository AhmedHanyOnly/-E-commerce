import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const RegisterPage = () => {
  return (
    <div className="bg-log ">
    <Container className="d-flex justify-content-center ">
        <Row  className="py-5">
          <Col sm="12 flex-column d-flex justify-content-center">
            <label className="mx-auto fs-1 fw-bold py-4">تسجيل حساب جديد</label>
            <input type="text" placeholder="اسم المستخدم" className="text-center py-3 rounded my-2 int"/>
            <input type="text" placeholder="البريد الالكتروني" className="text-center py-3 rounded my-2 int"/>
            <input type="password" placeholder="كلمه السر" className="text-center py-3 rounded my-2 int"/>
            <button className="btn btn-dark my-2 ">تسجيل الدخول</button>
            <div className="d-flex m-auto">
            <label htmlFor="" className="fw-bold p-1"> لديك حساب بالفعل ؟</label>
            <Link to='/login' className="text-decoration-none">
            <span className="text-sign p-1">اضغط هنا</span>
            </Link>
            </div>
          </Col>
        </Row>
    </Container>
  </div>
  )
}

export default RegisterPage
