// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.
// 

namespace AutoRest.TypeScript.Model
{
    public class DictionaryTypeTS : Core.Model.DictionaryType
    {
        public DictionaryTypeTS()
        {
            Name.OnGet += v => $"Object";
        }
    }
}