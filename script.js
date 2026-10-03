
function confirmDelete(){
  const phone = document.getElementById('deletePhone').value.trim();
  const agree = document.getElementById('agreeDelete').checked;
  const toast = document.getElementById('deleteToast');
  if(!phone){ toast.style.display='block'; toast.textContent='يرجى إدخال رقم الهاتف المرتبط بالحساب.'; return; }
  if(!agree){ toast.style.display='block'; toast.textContent='يرجى تأكيد فهمك أن البيانات لا يمكن استعادتها بعد تنفيذ الحذف.'; return; }
  const message = `طلب حذف حساب مطعم اليمن السعيد%0Aرقم الهاتف: ${phone}%0Aأؤكد رغبتي في حذف الحساب والبيانات المرتبطة به.`;
  toast.style.display='block';
  toast.innerHTML='تم تجهيز طلب الحذف. ستتم مراجعة الطلب خلال <b>5 ساعات</b>. بعد تنفيذ الحذف لا يمكن استعادة البيانات.<br><br><a class="btn" target="_blank" href="https://wa.me/96711285473?text='+message+'">إرسال طلب الحذف عبر واتساب</a>';
}
