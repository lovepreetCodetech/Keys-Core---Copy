//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace KeysPlus.Data
{
    using System;
    using System.Collections.Generic;
    
    public partial class Company
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Company()
        {
            this.Manager = new HashSet<Manager>();
            this.ServiceProvider = new HashSet<ServiceProvider>();
        }
    
        public int Id { get; set; }
        public int PhysicalAddressId { get; set; }
        public int BillingAddressId { get; set; }
        public string Name { get; set; }
        public string Website { get; set; }
        public string UpdatedBy { get; set; }
        public System.DateTime CreatedOn { get; set; }
        public string CreatedBy { get; set; }
        public System.DateTime UpdatedOn { get; set; }
        public bool IsActive { get; set; }
        public string ProfilePhoto { get; set; }
        public string PhoneNumber { get; set; }
    
        public virtual Company Company1 { get; set; }
        public virtual Company Company2 { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Manager> Manager { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<ServiceProvider> ServiceProvider { get; set; }
        public virtual Address Address { get; set; }
        public virtual Address Address1 { get; set; }
    }
}
