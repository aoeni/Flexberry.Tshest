﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Tshest
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Посад талон.
    /// </summary>
    // *** Start programmer edit section *** (ПосадТалон CustomAttributes)

    // *** End programmer edit section *** (ПосадТалон CustomAttributes)
    [AutoAltered()]
    [Caption("Посадочный талон")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ПосадТалонE", new string[] {
            "Пассажир as \'Пассажир\'",
            "Пассажир.КодБрони.Код as \'Код бронирования\'",
            "Пассажир.ФИО as \'ФИО\'",
            "Пассажир.МестоНаРейс.Место",
            "Рейс as \'Рейс\'",
            "Рейс.Куда as \'Куда\'",
            "Рейс.Откуда",
            "Рейс.Дата",
            "Рейс.ВремяОтпр as \'Время отправления\'",
            "Рейс.НачПосад as \'Начало посадки\'",
            "Рейс.КонецПосад as \'Конец посадки\'",
            "Рейс.Выход"}, Hidden=new string[] {
            "Пассажир.ФИО",
            "Рейс.Куда"})]
    [MasterViewDefineAttribute("ПосадТалонE", "Пассажир", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "ФИО")]
    [MasterViewDefineAttribute("ПосадТалонE", "Рейс", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Куда")]
    [View("ПосадТалонL", new string[] {
            "Рейс.Куда as \'Куда\'",
            "Пассажир.ФИО as \'ФИО\'"})]
    public class ПосадТалон : ICSSoft.STORMNET.DataObject
    {
        
        private IIS.Tshest.Рейс fРейс;
        
        private IIS.Tshest.Пассажир fПассажир;
        
        // *** Start programmer edit section *** (ПосадТалон CustomMembers)

        // *** End programmer edit section *** (ПосадТалон CustomMembers)

        
        /// <summary>
        /// Посад талон.
        /// </summary>
        // *** Start programmer edit section *** (ПосадТалон.Пассажир CustomAttributes)

        // *** End programmer edit section *** (ПосадТалон.Пассажир CustomAttributes)
        [PropertyStorage(new string[] {
                "Пассажир"})]
        [NotNull()]
        public virtual IIS.Tshest.Пассажир Пассажир
        {
            get
            {
                // *** Start programmer edit section *** (ПосадТалон.Пассажир Get start)

                // *** End programmer edit section *** (ПосадТалон.Пассажир Get start)
                IIS.Tshest.Пассажир result = this.fПассажир;
                // *** Start programmer edit section *** (ПосадТалон.Пассажир Get end)

                // *** End programmer edit section *** (ПосадТалон.Пассажир Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ПосадТалон.Пассажир Set start)

                // *** End programmer edit section *** (ПосадТалон.Пассажир Set start)
                this.fПассажир = value;
                // *** Start programmer edit section *** (ПосадТалон.Пассажир Set end)

                // *** End programmer edit section *** (ПосадТалон.Пассажир Set end)
            }
        }
        
        /// <summary>
        /// Посад талон.
        /// </summary>
        // *** Start programmer edit section *** (ПосадТалон.Рейс CustomAttributes)

        // *** End programmer edit section *** (ПосадТалон.Рейс CustomAttributes)
        [PropertyStorage(new string[] {
                "Рейс"})]
        [NotNull()]
        public virtual IIS.Tshest.Рейс Рейс
        {
            get
            {
                // *** Start programmer edit section *** (ПосадТалон.Рейс Get start)

                // *** End programmer edit section *** (ПосадТалон.Рейс Get start)
                IIS.Tshest.Рейс result = this.fРейс;
                // *** Start programmer edit section *** (ПосадТалон.Рейс Get end)

                // *** End programmer edit section *** (ПосадТалон.Рейс Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ПосадТалон.Рейс Set start)

                // *** End programmer edit section *** (ПосадТалон.Рейс Set start)
                this.fРейс = value;
                // *** Start programmer edit section *** (ПосадТалон.Рейс Set end)

                // *** End programmer edit section *** (ПосадТалон.Рейс Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ПосадТалонE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ПосадТалонE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ПосадТалонE", typeof(IIS.Tshest.ПосадТалон));
                }
            }
            
            /// <summary>
            /// "ПосадТалонL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ПосадТалонL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ПосадТалонL", typeof(IIS.Tshest.ПосадТалон));
                }
            }
        }
    }
}
