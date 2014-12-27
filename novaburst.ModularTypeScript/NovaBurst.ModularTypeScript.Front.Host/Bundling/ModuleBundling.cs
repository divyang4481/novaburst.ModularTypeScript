﻿using Newtonsoft.Json;
using SquishIt.Framework;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace NovaBurst.ModularTypeScript.Front.Host
{
    public static class ModuleBundling
    {
        public static void BundleAll(string modulesDir)
        {
            // get a list of module directories
            string[] moduleDirLst = Directory.GetDirectories(modulesDir);

            // for each module directory bundle and minify all files included in each module bundle.json
            foreach(string moduleDir in moduleDirLst)
            {
                BundleModule(moduleDir);
            }
        }

        private static void BundleModule(string moduleDir)
        {
            // take bundle.json
            string bundleInfoJson = File.ReadAllText(Path.Combine(moduleDir, "bundle.json"));
            ModuleBundle bundleInfo = JsonConvert.DeserializeObject<ModuleBundle>(bundleInfoJson);

            if (bundleInfo != null)
            {
                if (bundleInfo.Scripts != null && bundleInfo.Scripts.Length > 0)
                {
                    BundleModuleScripts(moduleDir, bundleInfo);
                }
            }
        }

        private static void BundleModuleScripts(string moduleDir, ModuleBundle bundleInfo)
        {
            // create bundle
            var bundle = Bundle.JavaScript().ForceRelease();

            // add each script to bundle
            foreach (var script in bundleInfo.Scripts)
            {
                bundle.Add(Path.Combine(moduleDir, script + ".js"));
            }

            // render bundle to disk in current module folder
            bundle.Render(Path.Combine(moduleDir, "bundle.js"));

            // create init.min
            Bundle.JavaScript().ForceRelease().Add(Path.Combine(moduleDir, "init.js")).Render(Path.Combine(moduleDir, "init.min.js"));
            
        }
    }
}
