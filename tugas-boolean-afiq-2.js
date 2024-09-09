// Fungsi 1: Akses hanya untuk admin dan super-admin
function canAccessForAdminOrSuperAdmin(userRole) {
  if (userRole === "admin" || userRole === "super-admin") {
    return true;
  } else {
    console.log("Akses ditolak: Hanya admin dan super-admin yang diizinkan.");
    return false;
  }
}

// Fungsi 2: Akses hanya untuk super-admin
function canAccessForSuperAdminOnly(userRole) {
  if (userRole === "super-admin") {
    return true;
  } else {
    console.log("Akses ditolak: Hanya super-admin yang diizinkan.");
    return false;
  }
}

// Fungsi 3: Akses untuk semua pengguna dengan status aktif
function canAccessForActiveUsers(userStatus) {
  if (userStatus === "active") {
    return true;
  } else {
    console.log("Akses ditolak: Hanya pengguna dengan status aktif yang diizinkan.");
    return false;
  }
}
