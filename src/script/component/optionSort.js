class OptionSort extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  set DataProvinsi(data) {
    this._DataProvinsi = data;
    this._DataProvinsi.forEach((provinsi) => {
      let { id, nama } = provinsi;
      let option = document.createElement("option");
      option.setAttribute("value", id);
      option.innerHTML = nama;
      this.querySelector("#SelectProvinsi").appendChild(option);
    });
  }
  get IdKabupaten() {
    return this.querySelector("#SelectKabupaten").value;
  }
  set eventFindButton(event) {
    this._findEvent = event;
    this.render();
  }
  set DataKabupaten(data) {
    this._DataProvinsi = data;
    this.querySelector("#SelectKabupaten").innerHTML = "";
    this._DataProvinsi.forEach((kabupaten) => {
      let { id, nama } = kabupaten;
      let option = document.createElement("option");
      option.setAttribute("value", id);
      option.innerHTML = nama;
      this.querySelector("#SelectKabupaten").appendChild(option);
    });
  }
  render() {
    this.innerHTML = `
      <div class="row justify-content-center mb-5 m-0">
        <div class="col-md-4 col-6">
            <div class="input-group">
                <label class="input-group-text bg-primary text-light rounded mb-2 container text-center" for="SelectProvinsi">Provinsi</label>
                <select class="form-select" id="SelectProvinsi">
                    <option selected>Provinsi</option>
                </select>
            </div>
        </div>
        <div class="col-md-4 col-6 ">
            <div class="input-group">
                <label class="input-group-text bg-primary text-light rounded mb-2 container" for="SelectKabupaten">Kabupaten</label>
                <select class="form-select" id="SelectKabupaten">
                    <option selected>Kabupaten</option>
                </select>
             </div>
        </div>
      </div>
      <button type="button" class="btn btn-primary d-block mx-auto col-11 col-md-8 col-sm-10 p-3 rounded-pill shadow-lg " id="find">Temukan</button>
    `;
    this.querySelector("#find").addEventListener("click", this._findEvent);
  }
}
customElements.define("option-sort", OptionSort);
