import mongoose from "mongoose";

const RoleSchema = new mongoose.Schema({
  role_name: {
    type: String,
    minlength: 2,
    maxlength: 25,
    required: [true, "Role name is required."],
    unique: [true, "Role name already exist."],
    trim: true,
  },
  permissions: {
    user_create: { type: Boolean, default: false },
    user_edit: { type: Boolean, default: false },
    user_view: { type: Boolean, default: false },
    role_create: { type: Boolean, default: false },
    role_edit: { type: Boolean, default: false },
    role_view: { type: Boolean, default: false },
    production_line_master_create: { type: Boolean, default: false },
    production_line_master_edit: { type: Boolean, default: false },
    production_line_master_view: { type: Boolean, default: false },
    production_booking_create: { type: Boolean, default: false },
    production_booking_edit: { type: Boolean, default: false },
    production_booking_view: { type: Boolean, default: false },
    pallate_create: { type: Boolean, default: false },
    pallate_edit: { type: Boolean, default: false },
    pallate_view: { type: Boolean, default: false },
    material_master_create: { type: Boolean, default: false },
    material_master_edit: { type: Boolean, default: false },
    material_master_view: { type: Boolean, default: false },
  },
  status: { type: Boolean, default: true },
  created_employee_id: {
    type: mongoose.Types.ObjectId,
    ref: "users",
    required: true,
    trim: true,
  },
  roles_remarks: {
    type: String,
  },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
  deleted_at: { type: Date, default: null },
});

const RolesModel = mongoose.model("roles", RoleSchema);

export default RolesModel;
