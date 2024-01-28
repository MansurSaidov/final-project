const viewRadio = () => {
  const fruits = document.querySelectorAll('input[name="fruit"]');
  for (const f of fruits) {
    if (f.checked) {
      alert(f.value)
    }
  }
}