document.getElementById('Cpf').addEventListener('input', function (e) {
    this.value = this.value.replace(/[^0-9]/g, '').slice(0, 11);
 });
 document.getElementById('telefone').addEventListener('input', function (e) {
    this.value = this.value.replace(/[^0-9]/g, '').slice(0, 15);
 });
 const loadFile = (event) => {
    const profilePic = document.getElementById('profilePic');
    profilePic.src = URL.createObjectURL(event.target.files[0]);
};