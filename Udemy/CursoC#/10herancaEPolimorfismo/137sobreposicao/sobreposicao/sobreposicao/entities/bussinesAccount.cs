﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace heranca.entities
{
    internal class bussinesAccount : account
    {
        public double loanLimit { get; set; }

        public bussinesAccount()
        {

        }

        public bussinesAccount(int number, string holder, double balance, double loanLimit) : base(number, holder, balance)
        {

            this.loanLimit = loanLimit;
        }

        public void loan(double amount)
        {
            if (amount <= loanLimit)
            {
                balance += amount;
            }
        }
    }
}
