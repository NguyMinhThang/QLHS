import "./User.css";
import React from "react";
import { useState } from "react";
import { dataUser1 } from "../Data/dataUser";

export default function User1() {
  const [listUsers, setListusers] = useState(dataUser1);
  const handleAdd = () => {
    const values = document.getElementById("name").value;
    const valMath = document.getElementById("mathPoint").value;
    const valEng = document.getElementById("englishPoint").value;
    const valHis = document.getElementById("historyPoint").value;
    const valEmail = document.getElementById("email").value;
    const userItem = {
      id: listUsers.length + 1,
      name: values,
      mathPoint: valMath,
      englishPoint: valEng,
      historyPoint: valHis,
      email: valEmail,
    };
    setListusers([...listUsers, userItem]);
    document.getElementById("name").value = "";
    document.getElementById("mathPoint").value = "";
    document.getElementById("englishPoint").value = "";
    document.getElementById("historyPoint").value = "";
    document.getElementById("email").value = "";
  };

  const handleDel = (id) => {
    const newList = [...listUsers];
    const index = listUsers.findIndex((item) => item.id === id);
    newList.splice(index, 1);
    setListusers(newList);
  };

  const openModal = async (id) => {
    const modal = document.getElementById(`member-modal`);
    modal.style.display = `block`;
    const title = document.getElementById(`member-title`);
    title.innerHTML = `Thay đổi thông tin của member có ID: ${id}`;
    const updateMemberForm = document.getElementById(`form-update`);
    updateMemberForm.addEventListener(`submit`, async (e) => {
      e.preventDefault();
      const memberInfo = {
        id,
        name: updateMemberForm.name.value,
        mathPoint: updateMemberForm.math.value,
        englishPoint: updateMemberForm.english.value,
        historyPoint: updateMemberForm.history.value,
        email: updateMemberForm.email.value,
      };
      const userIndex = listUsers.findIndex((item) => item.id === id);
      const newList = [...listUsers];
      newList[userIndex] = memberInfo;
      setListusers(newList);
      closeModal();
    });
  };

  // close modal
  window.onclick = function (event) {
    const modal = document.getElementById(`member-modal`);
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };
  const closeModal = () => {
    const modal = document.getElementById(`member-modal`);
    modal.style.display = `none`;
  };

  return (
    <div className="App">
      <h1 class="title">DANH SÁCH HỌC SINH</h1>
      <div class="list-member">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Math</th>
              <th>English</th>
              <th>History</th>
              <th>Email</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody id="render-data">
            {listUsers.map((item, index) => {
              return (
                <tr>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.mathPoint}</td>
                  <td>{item.englishPoint}</td>
                  <td>{item.historyPoint}</td>
                  <td>{item.email}</td>
                  <td>
                    <button onClick={(e) => openModal(item.id)}>
                      <img
                        alt=""
                        src="https://img.icons8.com/fluent-systems-regular/24/000000/change-user-female--v1.png"
                      />
                    </button>
                  </td>
                  <td>
                    <button onClick={(e) => handleDel(item.id)}>
                      <img
                        alt=""
                        src="https://img.icons8.com/color/24/000000/delete-user-data.png"
                      />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <div>
          <div class="add">
            <div class="title">Thêm thành viên mới</div>
            <div class="form-add-member">
              <div id="form-register">
                <div class="input-title">Name*:</div>
                <div>
                  <input id="name" placeholder="Name" type="text" name="name" />
                </div>
                <div class="input-title">Math*:</div>
                <div>
                  <input
                    id="mathPoint"
                    placeholder="0"
                    type="number"
                    name="math"
                  />
                </div>
                <div class="input-title">English*:</div>
                <div>
                  <input
                    id="englishPoint"
                    placeholder="0"
                    type="number"
                    name="english"
                  />
                </div>
                <div class="input-title">History*:</div>
                <div>
                  <input
                    id="historyPoint"
                    placeholder="0"
                    type="number"
                    name="history"
                  />
                </div>
                <div class="input-title">Email*:</div>
                <div>
                  <input
                    id="email"
                    placeholder="abc@email.com"
                    type="text"
                    name="email"
                  />
                </div>
                <div class="submit-wrapper">
                  <button onClick={handleAdd}>Thêm mới</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="member-modal" class="modal">
        <div class="modal-content">
          <span class="close" onClick={closeModal}>
            &times;
          </span>
          <div class="update-info-member">
            <div class="title" id="member-title"></div>
          </div>
          <div class="form-update-member">
            <form id="form-update">
              <div class="form-flex">
                <div class="input-flex">
                  <span>
                    Name*: <input placeholder="Name" type="text" name="name" />
                  </span>
                </div>

                <div class="input-flex">
                  <span>
                    Math*:
                    <input placeholder="0" type="number" name="math" />
                  </span>
                </div>

                <div class="input-flex">
                  <span>
                    English*:
                    <input placeholder="0" type="number" name="english" />
                  </span>
                </div>

                <div class="input-flex">
                  <span>
                    History*:
                    <input placeholder="0" type="number" name="history" />
                  </span>
                </div>
                <div class="input-flex">
                  <span>
                    Email*:
                    <input placeholder="Email" type="text" name="email" />
                  </span>
                </div>
              </div>
              <div class="submit-wrapper">
                <button type="submit">Thay đổi</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
